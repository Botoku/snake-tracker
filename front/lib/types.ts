export type UserType = {
  email: string;
  password?: string;
  name?: string;
};

export type Snake = {
  acquisition_date: string;
  created_at: string;
  date_of_birth: string;
  id: number;
  morph: string;
  name: string;
  notes: string;
  owner_ids: string[];
  sex: string;
  species: string;
  updated_at: string;
};
