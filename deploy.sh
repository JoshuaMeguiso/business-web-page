#!/usr/bin/env bash

# === CONFIGURATION ===
SSH_KEY="$HOME/.ssh/cyberhealth/key.pem"
USER="ubuntu"
HOST="34.244.37.130"
REMOTE_DIR="/home/ubuntu/projects/auditfixers/www"

# === DEPLOYMENT ===
echo "Select deployment target:"
echo "1) PROD  (auditfixers.eu)"
echo "2) UAT   (uat.auditfixers.eu)"
read -p "Enter choice [1 or 2]: " choice

if [ "$choice" == "1" ]; then
    echo "🚀 Building and deploying to PROD..."
    npm run build:prod
    sudo scp -i "$SSH_KEY" -r ./dist/* ${USER}@${HOST}:${REMOTE_DIR}
    echo "✅ Deployed to PROD → https://auditfixers.eu"

elif [ "$choice" == "2" ]; then
    echo "🚀 Building and deploying to UAT..."
    npm run build
    sudo scp -i "$SSH_KEY" -r ./dist/* ${USER}@${HOST}:${REMOTE_DIR}
    sudo scp -i "/Users/christianabad/.ssh/cyberhealth/key.pem" -r ./dist/audit-fixers ubuntu@34.244.37.130:/home/ubuntu/projects/auditfixers/www
    echo "✅ Deployed to UAT → https://uat.auditfixers.eu"

else
    echo "❌ Invalid choice. Exiting."
    exit 1
fi

# # === OPTIONAL POST-DEPLOY FIX ===
# echo "🔧 Setting correct permissions on remote..."
# ssh -i "$SSH_KEY" ${USER}@${HOST} "sudo chown -R ubuntu:www-data ${REMOTE_DIR} && sudo find ${REMOTE_DIR} -type d -exec chmod 755 {} \; && sudo find ${REMOTE_DIR} -type f -exec chmod 644 {} \; && sudo systemctl reload nginx"

echo "🎉 Deployment complete!"
