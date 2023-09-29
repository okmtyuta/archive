#!/bin/zsh
echo -n "\e[31mDid you subscribe components you newly created? [y/N]:\e[m"
read ANS

case $ANS in
  [Yy]* )
    make npm-publish-sh
    echo "\033[32mCorrectly published\033[m"
    ;;
  * )
    echo "\e[31mSubscribe components you newly created firstly.\e[m"
    ;;
esac