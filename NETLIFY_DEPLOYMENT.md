# Netlify Deployment Guide for Disintox Website

## Prerequisites
- GitHub account with repository access
- Netlify account (free tier works)

## Deployment Steps

### 1. Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select the `disintox-website` repository
5. Choose the branch: `master` or `main`

### 2. Build Settings

Netlify should auto-detect Next.js settings, but verify:

- **Base directory:** (leave empty)
- **Build command:** `npm run build`
- **Publish directory:** (leave empty - let @netlify/plugin-nextjs handle it)
- **Functions directory:** `netlify/functions`

### 3. Environment Variables

Add these in Netlify Dashboard → Site settings → Environment variables:

#### Required (if using email functionality):
```
SENDGRID_API_KEY=your_sendgrid_api_key_here
SMTP_FROM=customercare@dis-infect.in
```

#### Optional (for CRM integration):
```
CRM_WEBHOOK_URL=your_crm_webhook_url
```

#### Optional (for analytics):
```
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### 4. Domain Configuration

#### Using Netlify Domain:
- Your site will be available at: `https://your-site-name.netlify.app`

#### Using Custom Domain (www.dis-infect.in):
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `www.dis-infect.in` and `dis-infect.in`
4. Netlify will provide DNS records
5. Update your domain registrar with these DNS records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify Load Balancer IP)

   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```
6. Wait for DNS propagation (5-30 minutes)
7. Netlify will auto-provision SSL certificate

### 5. Deploy

Click "Deploy site" - Netlify will:
- Install dependencies (`npm install`)
- Run build (`npm run build`)
- Deploy to CDN
- Provision SSL certificate

### 6. Post-Deployment Checks

✅ Visit your site URL
✅ Test all pages (Products, About, Contact, etc.)
✅ Test demo form submission
✅ Check mobile responsiveness
✅ Verify images load correctly
✅ Test navigation

### 7. Continuous Deployment

Once connected, every push to your main branch will auto-deploy:
- Push to GitHub → Netlify auto-builds → Live in 2-3 minutes

### 8. Deploy Previews

- Every pull request gets a unique preview URL
- Test changes before merging
- Preview URL format: `deploy-preview-X--your-site.netlify.app`

## Troubleshooting

### Build Fails
- Check Netlify build logs
- Verify Node version (should be 20)
- Ensure all dependencies in package.json

### Images Not Loading
- Check images are in `/public/` directory
- Verify image paths start with `/` (e.g., `/logo.png`)
- Add missing images: `kmats_logo.png`, PDF certificates

### API Routes Not Working
- Verify `/api/demo-request` is accessible
- Check environment variables are set
- Review function logs in Netlify dashboard

### Forms Not Submitting
- Ensure form has `name` attribute
- Check API route in `/api/demo-request/route.ts`
- Verify environment variables for email service

### Domain Not Resolving
- Wait 30 minutes for DNS propagation
- Use DNS checker: https://dnschecker.org/
- Verify DNS records at domain registrar

## Performance Optimization

After deployment, consider:
- Enable Netlify Image CDN
- Add Netlify Analytics
- Enable Asset Optimization (minify JS/CSS)
- Enable prerendering for better SEO

## Monitoring

Monitor your site health:
- Netlify Analytics (built-in)
- Google Search Console
- Uptime monitoring (UptimeRobot, Pingdom)

## Cost

**Netlify Free Tier includes:**
- 100 GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Global CDN
- Form submissions (100/month)

**Upgrade if needed:**
- Pro Plan: $19/month (more bandwidth, faster builds)

## Support

- Netlify Support: https://answers.netlify.com/
- Netlify Docs: https://docs.netlify.com/

## Quick Commands

```bash
# Test build locally
npm run build
npm start

# Check for errors
npm run lint

# Deploy manually (if needed)
netlify deploy --prod
```

---

**Deployment Status:** Ready to deploy ✅

Once deployed, share the live URL for final testing!
