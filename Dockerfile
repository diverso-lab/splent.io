# SPLENT landing — Jekyll + Tailwind (dev & serve)
# A single image that has both Ruby (Jekyll) and Node (Tailwind CLI) so
# `docker compose up` compiles Tailwind on watch mode and serves Jekyll
# with livereload. For production GitHub Pages, `npm run tailwind:build`
# produces the static CSS that Jekyll bundles.

FROM ruby:3.2

ENV LC_ALL=C.UTF-8 LANG=en_US.UTF-8 LANGUAGE=en_US.UTF-8
WORKDIR /usr/src/app

# System deps + Node.js 20 (for Tailwind CLI)
RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
        build-essential \
        curl \
        ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y --no-install-recommends nodejs && \
    rm -rf /var/lib/apt/lists/*

RUN git config --global --add safe.directory /usr/src/app

# Ruby deps (cached layer)
COPY Gemfile ./
RUN gem install bundler && bundle install

# Node deps (cached layer)
COPY package.json ./
RUN npm install --no-audit --no-fund

EXPOSE 4000
