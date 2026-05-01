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

export type Feeding = {
  id: number;
  feeding_date: string;
  prey_type: string;
  prey_size: string;

  acceptance: string;
  created_at: string;
  notes?: string;
  prey_frozen: string;

  prey_weight: string;
  quantity: number;
  snake_id: string;
};
