import React from 'react';
import { 
  BsCupHotFill,
  BsStars,
  BsShop,
  BsCalendarHeartFill,
  BsClockHistory,
  BsPhone,
  BsGraphUpArrow,
  BsShieldCheck,
  BsWhatsapp,
  BsQrCode,
  BsGlobe2,
  BsGeoAltFill,
  BsLightningChargeFill,
  BsHeadset,
  BsRobot
} from 'react-icons/bs';

interface IconComponentProps {
  className?: string;
  size?: number;
}

export type IconName =
  | 'bakery'
  | 'events'
  | 'restaurant'
  | 'commerce'
  | 'whatsapp'
  | 'speed'
  | 'security'
  | 'mapPin'
  | 'phone'
  | 'domain'
  | 'qrcode'
  | 'support'
  | 'bot';

export const ServiceIcon: React.FC<{ name: IconName; size?: number; className?: string }> = ({
  name,
  size = 24,
  className = '',
}) => {
  switch (name) {
    case 'bakery':
      return <BsCupHotFill style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'events':
      return <BsStars style={{ width: size, height: size }} className={`text-[#FBBC05] ${className}`} />;
    case 'restaurant':
      return <BsCalendarHeartFill style={{ width: size, height: size }} className={`text-[#EA4335] ${className}`} />;
    case 'commerce':
      return <BsShop style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'whatsapp':
      return <BsWhatsapp style={{ width: size, height: size }} className={`text-[#25D366] ${className}`} />;
    case 'speed':
      return <BsLightningChargeFill style={{ width: size, height: size }} className={`text-[#FBBC05] ${className}`} />;
    case 'security':
      return <BsShieldCheck style={{ width: size, height: size }} className={`text-[#34A853] ${className}`} />;
    case 'mapPin':
      return <BsGeoAltFill style={{ width: size, height: size }} className={`text-[#EA4335] ${className}`} />;
    case 'phone':
      return <BsPhone style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'domain':
      return <BsGlobe2 style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'qrcode':
      return <BsQrCode style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'support':
      return <BsHeadset style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    case 'bot':
      return <BsRobot style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
    default:
      return <BsStars style={{ width: size, height: size }} className={`text-[#8AB4F8] ${className}`} />;
  }
};
