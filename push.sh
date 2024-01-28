#!/usr/bin/zsh

git add .

read -p "What is the comment of your commit: " $comment

git commit -m "$comment"

$userName = dinexh
$userPasswd = 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

read -p "branch name: " $branch

git push https://$userName:$userPasswd@github.com/your-username/your-repository.git "$branch"
