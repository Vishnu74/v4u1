# Service Images Setup Guide

## Overview
The premium Service Card component has been implemented and is ready to display your service images. The component features:

- **Modern card design** with large image hero sections
- **Smooth hover effects** with scale animations on images
- **Gradient overlays** that adjust on hover
- **Premium badge** in the top-right corner
- **Responsive layout** that works on all devices
- **Professional styling** with rounded corners and shadows

## Required Service Images

Place your service images in the `public/assets/service/` folder with the following filenames:

### 1. structural-steel.jpg
**Service:** Structural Steel Detailing
**Recommended subject:** Steel beams, columns, structural framework, construction site, or fabrication shop showing structural steel elements

### 2. metalwork.jpg
**Service:** Metalwork Detailing
**Recommended subject:** Stairs, handrails, ramps, architectural metalwork, or detailed metal fabrication

### 3. connections.jpg
**Service:** Connection Design
**Recommended subject:** Steel connections, bolted connections, welded joints, connection details, or close-up of steel joints

### 4. estimation.jpg
**Service:** Material Take-Off & Estimation
**Recommended subject:** Blueprint plans, technical drawings, calculator with plans, or material lists

### 5. pointcloud.jpg
**Service:** Point Cloud to BIM Conversion
**Recommended subject:** 3D laser scanner, point cloud visualization, BIM model, or as-built scanning

### 6. shop-drawings.jpg
**Service:** Shop Drawing & CNC File Generation
**Recommended subject:** Detailed fabrication drawings, CNC machine, shop floor, or technical blueprints

## Image Specifications

### Recommended Dimensions
- **Aspect Ratio:** 16:9 or 4:3
- **Minimum Width:** 800px
- **Recommended Width:** 1200px - 1600px
- **Format:** JPG or PNG
- **File Size:** Optimized to under 500KB per image

### Image Quality Guidelines
- Use high-quality professional images
- Ensure good lighting and clarity
- Images should be relevant to the service
- Consider using images that show your actual work/projects
- Avoid overly busy or cluttered compositions

## Fallback Images

If service images are not available, the component will automatically fall back to a placeholder steel construction image from Unsplash. However, for the best presentation, use your own professional service images.

## How to Add Images

1. Place your images in: `public/assets/service/`
2. Name them exactly as specified above
3. Refresh your browser to see the updated service cards

## Component Features

### Visual Design
- **Large hero image** (256px height) with zoom effect on hover
- **Gradient overlay** that transitions from dark to transparent
- **Premium badge** with backdrop blur effect
- **Clean card layout** with generous padding and spacing

### Interactive Elements
- **Image zoom** on hover (110% scale with smooth transition)
- **Shadow depth** increases on hover
- **Color transitions** on text and icons
- **Border highlight** appears on hover (brand color)

### Content Display
- **Service title** with hover color change
- **Description** with 3-line clamp for consistency
- **Key features list** (up to 4 features shown)
- **CTA button** with animated arrow icon

## Usage in Code

The ServiceCard component is already integrated into:
- `/src/pages/Services.tsx` - Full services page
- `/src/pages/Home.tsx` - Services preview section

### Component Props
```typescript
<ServiceCard
  id="service-id"
  title="Service Title"
  description="Service description"
  features={['Feature 1', 'Feature 2', 'Feature 3']}
  imagePath="/assets/service/image-name.jpg"
  index={0}
  onClick={handleClick}
/>
```

## Customization

To update service image paths, edit `/src/data/data.ts`:

```typescript
export const SERVICES: Service[] = [
  {
    id: 'structural',
    title: 'Structural Steel Detailing',
    // ... other properties
    imagePath: '/assets/service/structural-steel.jpg', // Update this path
  },
  // ... other services
];
```

## Design Philosophy

The Service Card follows these design principles:
- **Premium aesthetics** with clean, modern styling
- **Visual hierarchy** with image as primary focus
- **Smooth interactions** that feel responsive and polished
- **Mobile-first** responsive design
- **Accessibility** with proper contrast and hover states

## Need Help?

If you encounter any issues with the service images:
1. Check that image filenames match exactly (case-sensitive)
2. Verify images are in the correct directory: `public/assets/service/`
3. Clear browser cache and refresh
4. Check browser console for any image loading errors
5. Ensure image file formats are supported (JPG, PNG, WebP)

---

**Created:** November 28, 2024
**Component Location:** `/src/components/ServiceCard.tsx`
**Data Configuration:** `/src/data/data.ts`
