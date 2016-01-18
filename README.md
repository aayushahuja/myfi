ssh -i myfi.pem ec2-user@ec2-52-77-245-234.ap-southeast-1.compute.amazonaws.com


ec2-54-179-153-152.ap-southeast-1.compute.amazonaws.com

sudo mongo
sudo mongo —fork —syslog log
http://ec2-54-179-153-152.ap-southeast-1.compute.amazonaws.com:27017/

ssh -i "myfi_ubuntu.pem" ubuntu@ec2-54-179-153-152.ap-southeast-1.compute.amazonaws.com

mongo
mongo
use myfi_test
show dbs
db.addUser({user:"myfi_test",pwd:"myfi_test",roles:["readWrite", "dbAdmin"]})
db.auth('myfi_test', 'myfi_test')

node server.js


———
export ANDROID_HOME=/Users/aayush/android-sdks/
PATH=$PATH:/Users/aayush/android-sdks/tools/
PATH=$PATH:/Users/aayush/android-sdks/platform-tools/

————

git add * -f
git commit -m "working sample"
git push
——————

http://ec2-54-179-153-152.ap-southeast-1.compute.amazonaws.com:8080/api/routers
http://ec2-54-179-153-152.ap-southeast-1.compute.amazonaws.com:27017/

————————————
forever start -l forever.log -o out.log -e err.log -a my-daemon.js
forever stop my-daemon.js

——————————————————
git reset --hard HEAD
git pull
