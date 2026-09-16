import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ Add this

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  cta: string;
  route: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule], // ✅ Include CommonModule
  templateUrl: './pricing.html',
})
export class Pricing {
  pricingPlans: PricingPlan[] = [
    {
      title: 'Documentation-Only Pack',
      price: 'From €999',
      features: [
        'ISO 27001 policy and procedure templates',
        'Risk assessment and risk register templates',
        'Statement of Applicability (SoA) template',
        'Core ISMS documentation pack',
        'Fully editable Word and Excel formats',
      ],
      cta: 'Get Started',
      route: '/gap-check',
    },
    {
      title: 'Certified ISO 27001 Lead Implementer Training',
      price: 'From €1,299',
      features: [
        'ISO 27001 Lead Implementer training via PECB',
        'Up to 35 hours CPE credits',
        'Certificate of training completion',
        'Includes certification exam fee and initial registration',
        'FREE exam re-take within 12 months',
      ],
      cta: 'Get Started',
      route: '/gap-check',
    },
    {
      title: 'ISO 27001 Certification Readiness Audit',
      price: 'From €1,499',
      features: [
        'Documentation and control implementation review',
        'Stage 1 and Stage 2 readiness assessment',
        'ISO 27001 certification readiness assessment report',
        'Certification roadmap and recommendations',
      ],
      cta: 'Get Started',
      route: '/gap-check',
    },
    {
      title: 'Managed ISMS Implementation Support',
      price: 'From €1,299 per month',
      features: [
        'Ongoing ISMS advisory support',
        'Risk register and policy updates',
        'Compliance and governance reviews',
        'Internal audit preparation',
        'Certification audit support',
      ],
      cta: 'Get Started',
      route: '/gap-check',
    },
    {
      title: 'ISO 27001 Design and Implementation',
      price: 'From €4,999',
      features: [
        'End-to-end ISO 27001 implementation',
        'ISMS design and documentation',
        'Risk assessment and SoA development',
        'Control implementation guidance',
        'Certification readiness support',
      ],
      cta: 'Get Started',
      route: '/gap-check',
    },
  ];
}