FROM base-devsecops
ARG DEBIAN_FRONTEND=noninteractive
COPY files/* /root/
RUN apt install -y postgresql-12 && \
  useradd -m -s /bin/bash -p $(openssl passwd -1 123) site && \
  mv /root/pg_hba.conf /etc/postgresql/12/main/pg_hba.conf && \
  mv /root/postgresql.conf /etc/postgresql/12/main/postgresql.conf && \
  mv /root/pre-script.sql /var/lib/postgresql && \
  service postgresql start && \
  runuser -l postgres -c "psql -f /var/lib/postgresql/pre-script.sql" && \
  mv /root/script.sql /home/site && \
  runuser -l site -c "psql -f /home/site/script.sql" && \
  rm /home/site/script.sql && \
  rm /var/lib/postgresql/pre-script.sql && \
  chmod +x /root/init.sh
CMD [ "/root/init.sh" ]