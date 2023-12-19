// "use client";
// import SignIn from "@/components/SignIn";
// import VerifySignIn from "@/components/VerifySignIn";
// import { useSignUp } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// function register() {
//   const { isLoaded, signUp, setActive } = useSignUp();
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [pendingVerification, setPendingVerification] = useState(false);
//   const [code, setCode] = useState("");
//   const router = useRouter();

//   // Form Submit
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     if (!isLoaded) {
//       return;
//     }

//     try {
//       await signUp.create({
//         firstName: firstName,
//         lastName: lastName,
//         emailAddress: email,
//         password,
//       });

//       // send the email.
//       await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

//       // change the UI to our pending section.
//       setPendingVerification(true);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//    const onPressVerify = async (e:any) => {
//      e.preventDefault();
//      if (!isLoaded) {
//        return;
//      }

//      try {
//        const completeSignUp = await signUp.attemptEmailAddressVerification({
//          code,
//        });
//        if (completeSignUp.status !== "complete") {
//          /*  investigate the response, to see if there was an error
//          or if the user needs to complete more steps.*/
//          console.log(JSON.stringify(completeSignUp, null, 2));
//        }
//        if (completeSignUp.status === "complete") {
//          await setActive({ session: completeSignUp.createdSessionId });
//          router.push("/");
//        }
//      } catch (err: any) {
//        console.error(JSON.stringify(err, null, 2));
//      }
//    };

//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//         <a
//           href="#"
//           className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//         >
//           <img
//             className="w-8 h-8 mr-2"
//             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//             alt="logo"
//           />
//           AthorStore
//         </a>
//         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//           Register
//         </h1>
//         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             {!pendingVerification && (
//               <SignIn
//                 firstName={firstName}
//                 lastName={lastName}
//                 email={email}
//                 password={password}
//                 setFirstName={setFirstName}
//                 setLastName={setLastName}
//                 setEmail={setEmail}
//                 setPassword={setPassword}
//                 handleSubmit={handleSubmit}
//               />
//             )}
//             {pendingVerification && (
//               <VerifySignIn
//                 code={code}
//                 setCode={setCode}
//                 onPressVerify={onPressVerify}
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default register;
