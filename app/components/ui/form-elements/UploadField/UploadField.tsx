import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '../../SkeletonLoader'
import s from '../Form.module.scss'
import { IUploadField } from '../form.interface'

import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	value,
	isNoImage = false,
	style,
}) => {
	const { isLoading, uploadFile } = useUpload(onChange, folder)

	return (
		<div className={cn(s.field, s.uploadField)} style={style}>
			<div className={s.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={s.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={s.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader
								count={1}
								className="w-full h-full"
							/>
						) : (
							value && (
								<Image alt="" src={value} fill unoptimized />
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}
export default UploadField
