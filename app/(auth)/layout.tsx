import Footer from "@/components/auth/footer";
import Header from "@/components/auth/header";
import { Fingerprint } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Header />
      </div>

      <div className="">
        <div className=" flex-col flex items-center justify-center">
          <div className="flex items-center justify-center my-2">
            <Fingerprint className="text-indigo-500" size={40} />
            <div>
              <p className="px-2 font-mono font-semibold text-2xl">NexusTalk</p>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
