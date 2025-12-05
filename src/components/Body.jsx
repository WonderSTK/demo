function Body() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8 pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Content */}
        <div className="space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span className="text-blue-600 text-xs font-bold tracking-wide uppercase">
              India's #1 Trading Education Platform
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Master the <br />
              Art of <span className="text-blue-600 relative inline-block">
                Trading
                <svg className="absolute w-[110%] h-4 -bottom-2 -left-1 text-blue-200 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 25 100 15" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.4" />
                </svg>
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
              Join 30,000+ traders who've transformed their trading journey.
              Learn from mentors with 9+ years of market expertise.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5 flex items-center gap-2">
              Start Learning Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3 hover:border-gray-300">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              View Programs
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">30,000+</h3>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Students</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">9+</h3>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Years Exp.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image & Floaters */}
        <div className="relative pl-4 lg:pl-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img src="/masterclass.jpg" alt="Trading Masterclass" className="w-full h-auto object-cover scale-105" />
            
            {/* Top Right Rating Badge */}
            <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3">
               <div className="flex text-blue-600 gap-0.5">
                 {[1,2,3,4,5].map(i => (
                   <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                 ))}
               </div>
               <span className="font-bold text-gray-900 text-sm">4.9/5</span>
            </div>

            {/* Bottom Left Live Trading Toast */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 pr-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
              <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Live Trading</p>
                <div className="text-xs text-gray-500 font-medium">500+ Sessions</div>
              </div>
            </div>
            
            
          </div>

          {/* Decorative Elements around Image */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10 opacity-60"></div>
        </div>

      </div>
    </div>
  );
}

export default Body