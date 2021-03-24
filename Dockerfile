FROM node:14-alpine

EXPOSE 8080

RUN set -x \
    && apk --no-cache add \
        git=2.24.4-r0 \
        openssh=8.1_p1-r0 \
    && mkdir /code

WORKDIR /code

ARG USER_ID
ARG GROUP_ID
RUN set -x \
    && if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
        # The node group will be deleted with the commmand deluser
        deluser --remove-home node \
        && addgroup -g ${GROUP_ID} node \
        && adduser -D -u ${USER_ID} -G node node; \
    fi \
    # configure ssh
    && mkdir -p /home/node/.ssh/ \
    && ssh-keyscan -t rsa github.com > /home/node/.ssh/known_hosts \
    && chown -R node:node /home/node/.ssh

USER node

ENV NPM_PACKAGES="${HOME}/.npm-packages"
ENV NODE_PATH="$NPM_PACKAGES/lib/node_modules:$NODE_PATH"
ENV PATH=/home/node/.npm-packages/bin:${PATH}
RUN set -x \
    && mkdir "${HOME}/.npm-packages" \
    && npm config set prefix '~/.npm-packages/' \
    && npm install -g \
        npm@~7.6.3 \
        npm-check \
        webpack-bundle-analyzer