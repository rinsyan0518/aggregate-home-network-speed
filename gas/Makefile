setup:
	npx clasp create --title aggregate-home-network-speed --type sheets --rootDir ./src

push:
	npx clasp push
	npx clasp deploy \
		-d "web app meta-version" \
		-i $(shell npx clasp deployments | grep "web app meta-version" | cut -d " " -f 2)
