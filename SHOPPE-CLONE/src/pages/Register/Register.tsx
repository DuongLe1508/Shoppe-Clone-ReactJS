import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

  const rules = getRules(getValues)

  return (
    <div className='bg-orange'>
      <div className='px-4 mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', rules.email)}
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'>{errors.email?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                  {...register('password', rules.password)}
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'>{errors.password?.message}</div>
              </div>
              <div className='mt-2'>
                <input
                  type='password'
                  autoComplete='on'
                  className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                  {...register('confirm_password', {
                    ...rules.confirm_password
                  })}
                />
                <div className='mt-1 min-h-[1.5rem] text-sm text-red-600'>{errors.confirm_password?.message}</div>
              </div>
              <div className='mt-2'>
                <button
                  type='submit'
                  className='w-full px-2 py-4 text-sm text-center text-white uppercase bg-red-500 hover:bg-red-600'
                >
                  Đăng ký
                </button>
              </div>
              <div className='flex items-center justify-center mt-8 gap-x-2'>
                <span className='text-gray-300'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='text-red-400 text-bold'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
