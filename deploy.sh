#!/bin/bash

lein clean && lein deploy clojars && lein codox && git commit -am "Deployed to clojars, docs" && git push

echo "Deployed to Clojars, Github, and documentation"
