FROM sgtux/base-devsecops
ARG DEBIAN_FRONTEND=noninteractive
RUN apt install -y apache2 php libapache2-mod-php
COPY files/ /var/www/html/