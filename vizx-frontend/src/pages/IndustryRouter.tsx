// IndustryRouter.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import HealthcareStaffingIndustry from './HealthcareStaffingIndustry';
import RealEstateIndustry from './RealEstateIndustry';
import InformationTechnologyIndustry from './InformationTechnologyIndustry';
import ManufacturingIndustry from './ManufacturingIndustry';
import FinanceIndustry from './FinanceIndustry';
import LogisticsSupplyChainIndustry from './LogisticsSupplyChainIndustry';
import TravelIndustry from './TravelIndustry';
import RetailIndustry from './RetailIndustry';
// Import additional industry components as needed

// Create a mapping object where keys are the slugs and values are the respective components.
const industryComponents: Record<string, React.FC> = {
  'healthcare': HealthcareStaffingIndustry,
  'real-estate': RealEstateIndustry,
  'technology': InformationTechnologyIndustry,
  'manufacturing': ManufacturingIndustry,
  'finance': FinanceIndustry,
  'supply-chain': LogisticsSupplyChainIndustry,
  'travel': TravelIndustry,
  'retail': RetailIndustry,


  // Add more mappings here as you create more industry pages.
};

const IndustryRouter: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const Component = slug ? industryComponents[slug] : null;

  return Component ? (
    <Component />
  ) : (
    <div className="p-8 text-white">Industry Not Found</div>
  );
};

export default IndustryRouter;
