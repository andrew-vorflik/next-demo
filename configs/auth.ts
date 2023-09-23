import type {AuthOptions, User} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

const users = [
  {name: 'Vasya Pupkin', email: 'vasyapupkin@gmail.com', password: "12345", image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzY2NTB8MHwxfHNlYXJjaHwzfHxyYW5kb218ZW58MHx8fHwxNjk1MzAxODU5fDA&ixlib=rb-4.0.3&q=85&w=100&h=100&fit=crop'},
  {name: 'Elena Pupkina', email: 'elenapupkina@gmail.com', password: "67890", image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMzY2NTB8MHwxfHNlYXJjaHw3fHxyYW5kb218ZW58MHx8fHwxNjk1MzAxODU5fDA&ixlib=rb-4.0.3&q=85&w=100&h=100&fit=crop'},
]

export const authConfig: AuthOptions = {
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    },
  }),
  Credentials({
    credentials: {
      email: {label: 'email', type: "email", required: true},
      password: {label: 'password', type: "password", required: true},
    },
    authorize(credentials) {
      if(!credentials?.email || !credentials?.password) {
        return null;
      }

      const currentUser = users.find((user) => credentials.email === user.email);

      if(currentUser && currentUser.password === credentials.password) {
        const {password, ...userWithoutPassword} = currentUser;

        return userWithoutPassword as User;
      }

      return null;
    }
  })],
  pages: {
    signIn: '/signin'
  }
}