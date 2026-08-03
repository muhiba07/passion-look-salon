import {
  Palette, Droplet, Scissors, Wind, Sparkles, Layers, Crown, CircleDot,
  Flame, Smile, Wand2, Hand, Slash, Leaf, Droplets, Zap, Sparkle,
  Award, HeartHandshake, ShieldCheck, Settings2, Star,
  type LucideProps,
} from 'lucide-react';
import { type ComponentType } from 'react';

const ICONS: Record<string, ComponentType<LucideProps>> = {
  Palette, Droplet, Scissors, Wind, Sparkles, Layers, Crown, CircleDot,
  Flame, Smile, Wand2, Hand, Slash, Leaf, Droplets, Zap, Sparkle,
  Award, HeartHandshake, ShieldCheck, Settings2, Star,
};

type IconProps = LucideProps & { name: string };

export default function Icon({ name, ...props }: IconProps) {
  const Cmp = ICONS[name] ?? Sparkles;
  return <Cmp {...props} />;
}
