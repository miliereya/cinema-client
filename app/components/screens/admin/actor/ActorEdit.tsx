import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import UploadField from '@/components/ui/form-elements/UploadField/UploadField'

import SkeletonLoader from '@/ui/SkeletonLoader'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import s_form from '@/ui/form-elements/AdminForm.module.scss'
import Button from '@/ui/form-elements/Button'
import Field from '@/ui/form-elements/Field'
import SlugField from '@/ui/form-elements/SlugField/SlugField'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/string/generateSlug'

import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit actor">
			<AdminNavigation />
			<Heading title="Edit actor" />
			<form onSubmit={handleSubmit(onSubmit)} className={s_form.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={s_form.fields}>
							<Field
								{...register('name', {
									required: 'Name is required!',
								})}
								placeholder="Name"
								error={errors.name}
							/>

							<SlugField
								register={register}
								generate={() => {
									setValue(
										'slug',
										generateSlug(getValues('name'))
									)
								}}
								error={errors.slug}
							/>

							<Controller
								control={control}
								name="photo"
								defaultValue=""
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder="actors"
										placeholder="Photo"
									/>
								)}
								rules={{
									required: 'Photo is required!',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}
export default ActorEdit
