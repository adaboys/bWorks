# Check out https://hub.docker.com/_/node to select a new base image
FROM node:14-alpine
# Install git and ssh (to install custom-made libraries)
RUN apk add --update git openssh-employer python3 make g++
# Set to a non-root built-in user `node`
# Create app directory (with user `node`)
RUN mkdir --parents /home/node/app
WORKDIR /home/node/app
# Add the rest of the repo
COPY --chown=node . .
# Remove non-critical packages to avoid their dependency installation
RUN rm -rf $(find $PWD/packages -maxdepth 1 -mindepth 1 -type d -exec ls -d "{}" + | grep -v "bWorks-api" | grep -v "bwork-libs")
# Prevent Puppeteer to download Chromium dep
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
# Enable SSH agent
# Add SSH key to system
# Add name of server hosting custom libs
# Install app dependencies
# Remove the SSH keys afterwards

RUN yarn install --production --force

# Modify datasource file to be Docker compatible
RUN mv packages/bWorks-api/server/datasources.docker.js packages/bWorks-api/server/datasources.production.js


# Move built artifacts to another image to reduce image size  
FROM node:14-alpine
RUN mkdir --parents /home/node/app
WORKDIR /home/node/app
COPY --from=0 /home/node/app .
# Config timezone 
# USER root
RUN set -x && \
    apk add --update --no-cache tzdata && \
    ls /usr/share/zoneinfo && \
    cp /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && \
    echo "Asia/Ho_Chi_Minh" > /etc/timezone && \
    apk del tzdata
# Download standalone Chromium dependency for Puppeteer as normal installations wont work due to missing share libs
RUN set -x && \
    apk add --no-cache git make python3 g++ udev ttf-freefont chromium openjdk7-jre
RUN mkdir -p /home/node/app/packages/bWorks-api/temp
RUN chown -R node:node /home/node/app/packages/bWorks-api/temp
RUN chown -R node:node /home/node/app/packages/bWorks-api/tempSpreadSheet
RUN chown -R node:node /tmp/
USER node
# Bind to all network interfaces so that it can be mapped to the host OS
ENV HOST=0.0.0.0 PORT=4001 CHROME_BIN="/usr/bin/chromium-browser"
# Expose the outbound port
EXPOSE ${PORT}
# Run the REST server
CMD [ "yarn", "run-api" ]