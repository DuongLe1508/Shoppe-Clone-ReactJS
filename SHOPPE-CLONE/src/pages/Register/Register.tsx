import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { getRules, schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const onSubmit = handleSubmit(
    (data) => {
      // console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white rounded shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng Ký</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              ></Input>
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                errorMessage={errors.password?.message}
                placeholder='Password'
              ></Input>

              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                autoComplete='on'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
              ></Input>

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
