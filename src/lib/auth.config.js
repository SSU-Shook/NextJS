export const authConfig = {
  pages: {
    signIn: "/login",
  },
  jwt: {
    secret: "as12k245",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (!token) {
        if (user.name) {
          token.name = user.name;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.name = token.name;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;

      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
