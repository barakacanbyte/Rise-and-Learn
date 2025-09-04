import React, { useEffect } from "react";
import { FaUniversity, FaUserTie, FaHandHoldingHeart, FaMoneyBillWave } from "react-icons/fa";

const Causes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bankDetails = {
    account: "015C0009L5L00",
    name: "RISE AND LEARN FOUNDATION (RL)",
    bank: "CRDB"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Cause</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your generous donation will help us transform lives through education and community development
          </p>
        </div>
      </div>

      {/* Bank Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Bank Transfer Details</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUniversity className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Bank Name</h3>
                <p className="mt-2 text-gray-600">{bankDetails.bank}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUserTie className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Account Name</h3>
                <p className="mt-2 text-gray-600">{bankDetails.name}</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMoneyBillWave className="text-orange-600 text-2xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Account Number</h3>
                <p className="mt-2 text-gray-600 font-mono">{bankDetails.account}</p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <FaHandHoldingHeart className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-3">
                  <p className="text-orange-700">
                    <span className="font-semibold">Important:</span> Please include your name or email in the reference/note when making a transfer so we can acknowledge your generous donation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-orange-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Your Donation Makes a Difference</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-orange-100">Children Educated</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-orange-100">Families Supported</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-orange-100">Communities Impacted</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Together, We Can Change Lives</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Your support helps us provide education, resources, and opportunities to those who need it most. 
          Every contribution, no matter the size, makes a meaningful impact.
        </p>
        <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Need Help with Your Donation?</h3>
          <p className="text-gray-600 mb-6">
            If you have any questions about making a donation or would like to learn more about our work, 
            please don't hesitate to contact us at <span className="text-orange-600 font-medium">riseandlearn01@gmail.com</span>
          </p>
          <a 
            href="mailto:riseandlearn01@gmail.com" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Causes;
