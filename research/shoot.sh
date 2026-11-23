C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
name=$1; url=$2
for w in 1440 390; do h=$([ $w = 1440 ] && echo 900 || echo 844)
"$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir=/tmp/chr-$name-$w --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36" --virtual-time-budget=9000 --window-size=$w,$h --screenshot=$PWD/$name-$w.png "$url" >/dev/null 2>&1
done
"$C" --headless=new --user-data-dir=/tmp/chr-$name-d --virtual-time-budget=8000 --dump-dom "$url" 2>/dev/null > /tmp/dom-$name.html
f=$(grep -oiE "(family=[A-Za-z+]+|font-family:[^;\"]{3,40}|use\.typekit|<video|youtube\.com/embed|vimeo|instagram)" /tmp/dom-$name.html | sort | uniq -c | sort -rn | head -8 | tr '\n' ' ')
echo "$name | $f"
