.PHONY: all
all: 16 18

%:
	n $@ && npm test
