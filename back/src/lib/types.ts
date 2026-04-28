export type Feeding = {
  snake_id: string;
  feeding_date: string;
  prey_type: string;
  prey_size: string;
  prey_weight: string;
  prey_frozen: string;
  quantity: number;
  acceptance: string;
  notes: string;
};

export type Snake = {
  owner_ids: string[];
  name: string;
  species: string;
  morph: string;
  sex: string;
  date_of_birth: string;
  acquisition_date: string;
  notes: string;
};
