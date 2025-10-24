# GOP Campaign Merch - Marketing Site

A comprehensive one-page marketing site for a Republican campaign merchandise brand, built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **One-page marketing site** with smooth scroll navigation
- **Comprehensive contact form** with modal and inline versions
- **API route** for form submissions with Zod validation
- **Responsive design** optimized for mobile-first approach (360px+)
- **Performance optimized** with Next.js Image component and WebP support

### Design System
- **Custom Tailwind theme** with GOP brand colors
- **Typography**: League Spartan for headings, Inter for body text
- **Modern, patriotic design** with generous white space and soft shadows
- **Accessible color contrast** meeting WCAG AA standards

### Sections Included
1. **Header** - Sticky navigation with smooth scroll anchors
2. **Hero** - Main headline with trust chips and primary CTA
3. **Value Props** - 6-card grid highlighting key benefits
4. **Categories** - Product category grid with visual icons
5. **How It Works** - 4-step process flow
6. **Packages** - 3-tier pricing cards with quote CTAs
7. **Compliance** - FEC disclaimer callout section
8. **Gallery** - Responsive image grid with modal viewer
9. **Resources** - Lead magnet download links
10. **CTA Section** - Bottom conversion section
11. **Contact Form** - Comprehensive form with validation
12. **Footer** - Legal links and company information

### Technical Features
- **SEO Optimized** with meta tags, Open Graph, and JSON-LD FAQ schema
- **Accessibility Compliant** with WCAG AA standards, focus management, and semantic HTML
- **Form Validation** using React Hook Form and Zod
- **Event Tracking** hooks for analytics integration
- **Mobile Floating CTA** button for improved conversion
- **Image Optimization** with Next.js Image component and placeholder API

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Google Fonts (League Spartan, Inter)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "republican swag"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for production integrations:

```env
# Email Service (Resend example)
RESEND_API_KEY=your_resend_api_key

# CRM Integration (Airtable example)
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_base_id

# Notifications (Slack example)
SLACK_WEBHOOK_URL=your_slack_webhook_url

# Analytics
GOOGLE_ANALYTICS_ID=your_ga_id
```

### Email Integration
The contact form API route (`/api/contact/route.ts`) includes commented examples for:
- **Resend** for email delivery
- **Airtable** for CRM integration
- **Slack** for team notifications

Uncomment and configure the relevant sections based on your needs.

### Analytics Integration
Event tracking is implemented throughout the site. The `trackEvent` function in `src/lib/utils.ts` can be connected to:
- Google Analytics 4
- Mixpanel
- Segment
- Custom analytics solutions

## 📱 Mobile Responsiveness

- **Mobile-first design** starting at 360px width
- **Responsive breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly interactions** with appropriate tap targets
- **Floating CTA button** on mobile for improved conversion

## ♿ Accessibility Features

- **WCAG AA compliant** color contrast ratios
- **Keyboard navigation** support throughout
- **Screen reader optimizations** with proper ARIA labels
- **Focus management** with visible focus indicators
- **Skip links** for keyboard users
- **Semantic HTML** structure with proper landmarks

## 🎨 Design Tokens

### Colors
- **Primary Navy**: #0B1F3B
- **Accent Heritage Red**: #B91C1C
- **Ink**: #475569
- **Gold**: #C28F2C
- **White**: #FFFFFF

### Typography
- **Headings**: League Spartan (300-900 weights)
- **Body/UI**: Inter (300-700 weights)

### Components
- **Buttons**: Primary (red), Secondary (outline navy)
- **Cards**: rounded-2xl with soft shadows
- **Badges & Chips**: Reusable UI components

## 📊 Performance

The site is optimized for:
- **Lighthouse scores** ≥90 for Performance, Accessibility, Best Practices
- **Image optimization** with WebP/AVIF formats
- **Lazy loading** for gallery images
- **Code splitting** with Next.js automatic optimization
- **Font optimization** with Google Fonts display: swap

## 🔒 Compliance & Legal

### FEC Compliance Features
- **Disclaimer placement** guidance and validation
- **Small item exceptions** handling
- **Made in USA claims** qualification
- **Documentation** requirements support

### Privacy & Legal
- **Privacy notice** included in contact form
- **Terms of Service** and **Privacy Policy** links in footer
- **Accessibility statement** link provided
- **GDPR considerations** in form handling

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
The site builds to a standalone Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional hosting with Node.js support

## 📈 Analytics Events

The following events are tracked throughout the site:
- `cta_click` - CTA button interactions
- `nav_click` - Navigation link clicks
- `form_start` - Form engagement
- `form_submit_success` - Successful form submissions
- `form_submit_error` - Form submission errors
- `category_click` - Product category selections
- `package_quote_request` - Package quote requests
- `resource_download` - Resource download attempts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for GOP campaign merchandise services.

## 📞 Support

For technical support or customization requests, contact the development team.

---

**Built with ❤️ for Republican campaigns across America** 🇺🇸