import Footer from "@/components/auth/footer";
import Header from "@/components/auth/header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>
        <Header />
      </div>
      <div className="h-full">
        <div className="h-full flex-col flex items-center justify-center">
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
