import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm'>
              <div className='text-2xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  name='password'
                  autoComplete='on'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full px-2 py-4 text-sm text-center text-white uppercase bg-red-500 hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='flex items-center justify-center mt-8 gap-x-2'>
                <span className='text-gray-300'>Bạn chưa có tài khoản?</span>
                <Link to='/register' className='text-red-400 text-bold'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
