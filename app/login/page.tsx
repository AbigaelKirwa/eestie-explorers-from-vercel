"use client"
import { createClient } from "@/utils/supabase/client"
import { Auth } from "@supabase/auth-ui-react"

export default function Login() {
  const supabase = createClient()
  const customTheme = {
    default: {
      colors: {
        brand: "hsl(27, 100%, 60%)",
        brandAccent: "hsl(27, 100%, 50%)",
        brandButtonText: "white",
        inputBackground: "hsl(30, 100%, 97%)",
        inputPlaceholder: "hsl(0, 0%, 70%)",
        buttonText: "white",
        buttonBackground: "hsl(27, 100%, 60%)", // Orange background for buttons
        buttonBackgroundHover: "hsl(27, 100%, 50%)", // Darker orange on hover
        background: "hsl(30, 100%, 97%)", // Light cream background for the form
        text: "hsl(0, 0%, 20%)", // Dark text for general text
      },
      space: {
        spaceSmall: "4px",
        spaceMedium: "8px",
        spaceLarge: "16px",
        labelBottomMargin: "8px",
        anchorBottomMargin: "4px",
        emailInputSpacing: "4px",
        socialAuthSpacing: "4px",
        buttonPadding: "10px 15px",
        inputPadding: "10px 15px",
      },
      fontSizes: {
        baseBodySize: "13px",
        baseInputSize: "17px",
        baseLabelSize: "17px",
        baseButtonSize: "17px",
      },
      radii: {
        borderRadiusButton: "4px",
        buttonBorderRadius: "4px",
        inputBorderRadius: "4px",
      },
    },
    dark: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#2e2e2e",
        defaultButtonBackgroundHover: "#3e3e3e",
      },
    },
    evenDarker: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#1e1e1e",
        defaultButtonBackgroundHover: "#2e2e2e",
      },
    },
  }

  return (
    <div className="flex flex-1 h-screen justify-center items-center">
      <div className="max-w-md py-16 px-16 mx-auto bg-white rounded-xl shadow-2xl shadow-orange-500/50 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 outline outline-offset-2 outline-orange-500">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: customTheme }}
          providers={["google"]}
        />
      </div>
    </div>
  )
}
// import statements from an index page and declare them in a single line much cleaner
