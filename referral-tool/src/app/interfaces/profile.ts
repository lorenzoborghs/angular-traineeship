export interface Profile {
  name: string;
  position: string;
  location: string;
  birthday: Date;
  yearsExperience?: number;
  referredBy: string;
  tags: string[];
}
