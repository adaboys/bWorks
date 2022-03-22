{-# LANGUAGE DataKinds #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE NoImplicitPrelude #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeOperators #-}

deadline :: POSIXTime
deadline = 1634338471  -- transaction's valid range must be before this

{-# INLINABLE mkValidator #-}
mkValidator :: POSIXTime -> BuiltinData -> BuiltinData -> ScriptContext -> Bool
mkValidator dl _ _ ctx = (to dl) `contains` range 
  where
    info :: TxInfo
    info = scriptContextTxInfo ctx

    range :: POSIXTimeRange
    range = txInfoValidRange info

validator :: POSIXTime -> Plutus.Validator
validator t = Ledger.mkValidatorScript $
    $$(PlutusTx.compile [|| validatorParam ||])
     `PlutusTx.applyCode`
      PlutusTx.liftCode deadline
    where validatorParam s = Scripts.wrapValidator (mkValidator s)

script :: Plutus.Script
script = Plutus.unValidatorScript (validator deadline)

deadlineScriptShortBs :: SBS.ShortByteString
deadlineScriptShortBs = SBS.toShort . LBS.toStrict $ serialise script

deadlineScript :: PlutusScript PlutusScriptV1
deadlineScript = PlutusScriptSerialised deadlineScriptShortBs
