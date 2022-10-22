export type Profile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  profilePictureURL: string | null;
  salary: number;
  phone?: string;
  email?: string;
};

export enum ApiResult {
  Success = 'OK',
  Failure = 'Error',
}
