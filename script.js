const code = "AQQjOCNhxrvoQfbVmZEQqdLK-CYfgm6u1_SJxET2CC9wzDTxAoP0PdMKYv_DiLCm70EDDPL5HCgHMqW7SpRtvuQXe3YeXxFwJWwNjczqq2mXXbHsuXhqvmcqYavlOg70ynr_lP_ZVEgw9ZbskGhwQ8GSRqWcCRo6zaCNBXtf9ErnNIi90Gj5-L7YZ6vtNGEzpNDfCuUyAtsdHaNVld0";  // Remplace par le code obtenu
const clientId = "78kr896whmvi7l";  
const clientSecret = "WPL_AP1.2tO8dJCYiUA72kIM.IukXiA=="; 
const redirectUri = "https://samia-ouchallal.netlify.app/";

fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirectUri,
        'client_id': clientId,
        'client_secret': clientSecret
    })
})
.then(response => response.json())
.then(data => {
    console.log("Access Token:", data.access_token);
})
.catch(error => console.error('Error:', error));
