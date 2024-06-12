import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";



//createRouteMatcher this helps us to make the route private or public
//(.*) it is used to match all of the meeting routes
const protectedRoute = createRouteMatcher([
  '/',
  '/upcoming',
  '/meeting(.*)',
  '/previous',
  '/recordings',
  '/personal-room',
]);

//the below code makes the route private
export default clerkMiddleware((auth, req) => {
  if (protectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};