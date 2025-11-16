# Analytics & SEO Setup Guide

This document explains how to set up and use the analytics and SEO features in the Disintox website.

## 📊 Google Analytics Setup

### Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Configure Environment Variable

1. Open the `.env.local` file in the root directory
2. Replace the placeholder with your actual Measurement ID:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YOUR-ACTUAL-ID
```

3. Save the file
4. Restart your development server

### Step 3: Verify Installation

1. Run the website locally or in production
2. Open browser Developer Tools (F12)
3. Go to the Network tab
4. Filter by "gtag" or "analytics"
5. You should see requests to Google Analytics

### Features Included

The analytics setup includes automatic tracking for:

- **Page Views**: Automatically tracked on every route change
- **PDF Downloads**: Track when users download resources
- **Video Plays**: Track when users play demo videos
- **Outbound Links**: Track clicks to external websites

### Custom Event Tracking

You can track custom events using the helper functions in `lib/gtag.ts`:

```typescript
import { trackPDFDownload, trackVideoPlay } from '@/lib/gtag';

// Track PDF download
trackPDFDownload('product-specification.pdf');

// Track video play
trackVideoPlay('Disintox Tablets Usage Guide');
```

## 🔍 SEO Features

### Sitemap

- **URL**: `https://www.dis-infect.in/sitemap.xml`
- **File**: `app/sitemap.ts`
- Automatically generated for all main pages
- Updated dynamically based on the routes

### Robots.txt

- **URL**: `https://www.dis-infect.in/robots.txt`
- **File**: `app/robots.ts`
- Allows search engine crawlers
- Points to sitemap location

### Open Graph Images

- **URL**: `https://www.dis-infect.in/opengraph-image`
- **File**: `app/opengraph-image.tsx`
- Automatically generated social media preview image
- Used when sharing links on Facebook, LinkedIn, Twitter, etc.

### Structured Data (Schema.org)

Located in `components/analytics/StructuredData.tsx`, includes:

- **Organization Schema**: Company information
- **Product Schema**: Product details and ratings
- **Medical Business Schema**: Healthcare business listing

This helps search engines understand your business and can result in rich snippets.

### Meta Tags

Enhanced meta tags are configured in `app/layout.tsx`:

- **Title Templates**: Automatic page titles with brand suffix
- **Open Graph**: Facebook and LinkedIn sharing
- **Twitter Cards**: Twitter sharing previews
- **Robots**: Search engine indexing instructions

## 🚀 SEO Best Practices Implemented

### 1. Semantic HTML
All pages use proper heading hierarchy (H1 → H2 → H3)

### 2. Mobile Optimization
Responsive design with mobile-first approach

### 3. Fast Loading
- Image optimization ready (add WebP images)
- Lazy loading for videos
- Minimal CSS and JavaScript

### 4. Accessibility
- ARIA labels where needed
- Keyboard navigation support
- Alt text for images (add when uploading images)

### 5. Internal Linking
- Proper navigation structure
- Breadcrumbs where applicable
- Related content links

## 📈 Monitoring Performance

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://www.dis-infect.in`
3. Verify ownership using one of these methods:
   - HTML file upload
   - HTML tag (add to `app/layout.tsx` in verification section)
   - Google Analytics
   - Domain name provider

### Key Metrics to Monitor

- **Impressions**: How often your site appears in search
- **Clicks**: How many people click through from search
- **CTR (Click-Through Rate)**: Clicks / Impressions
- **Average Position**: Your ranking for keywords
- **Core Web Vitals**: Page speed and user experience

## 🔧 Optional: Add Verification Codes

In `app/layout.tsx`, uncomment and add your verification codes:

```typescript
verification: {
  google: 'your-google-verification-code',
  yandex: 'your-yandex-verification-code',
  bing: 'your-bing-verification-code',
},
```

## 📝 Next Steps

1. ✅ Add real Google Analytics Measurement ID to `.env.local`
2. ✅ Submit sitemap to Google Search Console
3. ✅ Verify website ownership in Search Console
4. ✅ Monitor analytics dashboard regularly
5. ✅ Check Search Console for indexing issues
6. ✅ Track keyword rankings
7. ✅ Optimize based on user behavior data

## 🆘 Troubleshooting

### Analytics Not Working?

- Check that `.env.local` has the correct Measurement ID
- Verify the ID format is `G-XXXXXXXXXX` (not `UA-XXXXXXXX`)
- Restart the development server after changing `.env.local`
- Check browser console for errors
- Disable ad blockers for testing

### Sitemap Not Showing?

- Visit `http://localhost:3000/sitemap.xml` (development)
- Visit `https://www.dis-infect.in/sitemap.xml` (production)
- Check that all routes are accessible
- Verify deployment was successful

### Poor SEO Rankings?

- Add real, unique content (not placeholder text)
- Upload high-quality images with alt text
- Get backlinks from reputable websites
- Ensure fast page load times
- Create regular blog content
- Optimize for mobile devices

## 📚 Resources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Console Help](https://support.google.com/webmasters)
