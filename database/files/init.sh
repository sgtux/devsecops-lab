#!/bin/bash
exec runuser -l postgres -c "/usr/lib/postgresql/12/bin/postgres --config-file=/etc/postgresql/12/main/postgresql.conf"