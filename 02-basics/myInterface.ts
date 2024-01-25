interface UserInter {
  readonly dbId: number;
  name: string;
  email: string;
  googleId?: number;
  //   startTrail: () => string;
  startTrail(): string;
}

interface UserInter {
  githubToken: string;
}

interface Admin extends UserInter {
  role: 'admin' | 'user' | 'moderator';
}
