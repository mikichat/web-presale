import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-yellow-600 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span>🏗️</span> 프리미엄 분양 대행
          </h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#" className="hover:underline">홈</a></li>
              <li><a href="#" className="hover:underline">분양현장</a></li>
              <li><a href="#" className="hover:underline">상담예약</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-yellow-50 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-yellow-700 mb-6 leading-tight">
            내 집 마련의 꿈, <br /> 최고의 분양 전문가와 함께
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            엄선된 아파트, 상가, 오피스텔 분양 정보와 <br /> 전문적인 투자 컨설팅을 제공합니다.
          </p>
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-700 transition duration-300">
            분양 일정 확인하기
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          <div className="text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold mb-4">높은 미래 가치</h3>
            <p className="text-gray-500">입지 분석을 통해 향후 자산 가치 상승이 기대되는 지역을 추천합니다.</p>
          </div>
          <div className="text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4">맞춤형 매물</h3>
            <p className="text-gray-500">라이프스타일에 맞춘 최적의 평면과 단지를 안내해 드립니다.</p>
          </div>
          <div className="text-center p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-4">1:1 전문 상담</h3>
            <p className="text-gray-500">분양 자격, 대출 조건 등 까다로운 절차를 쉽게 풀어 드립니다.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <p className="mb-4 text-gray-400">© 2026 프리미엄 분양 대행. All rights reserved.</p>
        <p className="text-sm text-gray-500">전국 분양 상담 본부 | 대표전화: 1600-0000</p>
      </footer>
    </div>
  );
}
