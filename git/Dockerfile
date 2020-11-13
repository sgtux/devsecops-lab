FROM base-devsecops:1.0
ARG DEBIAN_FRONTEND=noninteractive
RUN apt install openssh-server -y && \
	useradd -m -s /bin/bash -p $(openssl passwd -1 123) zeus && \
	mkdir /home/zeus/site && \
	git init /home/zeus/site && \
	cd /home/zeus/site && \
	git config receive.denyCurrentBranch updateInstead && \
	mkdir /var/run/sshd && \
	 chown -R zeus:zeus /home/zeus/site
CMD ["/usr/sbin/sshd", "-D"]
