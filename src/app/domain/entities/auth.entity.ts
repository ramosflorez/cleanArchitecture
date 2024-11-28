export interface AuthToken {
  auth_token: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}
export interface User {
  id:             number;
  email:          string;
  last_name:      string;
  first_name:     string;
  group:          number;
  group_name:     GroupName;
  is_super_admin: boolean;
  company:        Company;
  updatedAt:      Date;
}

export interface Company {
  id:           string;
  name:         string;
  fms_id:       number;
  timezone:     string;
  is_km:        string;
  speed_filter: number;
  company_id:   string;
}

export interface GroupName {
  id:          number;
  name:        string;
  permissions: any[];
}
