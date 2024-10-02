// Interfaces
export interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

// Default Objects

export const DEFAULT_CREW_MEMBER: CrewMember = {
  adult: false,
  gender: 0,
  id: 0,
  known_for_department: '',
  name: '',
  original_name: '',
  popularity: 0,
  profile_path: '',
  credit_id: '',
  department: '',
  job: '',
};
