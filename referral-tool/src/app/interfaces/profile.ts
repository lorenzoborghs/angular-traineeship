export interface Profile {
  name: string;
  picture: string;
  position: string;
  location: string;
  birthday: Date;
  yearsExperience?: number;
  referredBy: string;
  tags: string[];
}
