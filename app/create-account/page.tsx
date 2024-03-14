import Link from 'next/link';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">회원가입을 위해 빈칸을 채워주세요.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none 
            ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none
            placeholder:text-neutral-400 placeholder:pl-2"
            type="text"
            placeholder="사용자 이름"
            required
          />
          <span className="text-red-500 font-medium">입력 오류</span>
        </div>
        <button className="primary-btn h-10">회원가입</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
          </span>
          <span>SMS로 회원가입</span>
        </Link>
      </div>
    </div>
  );
}