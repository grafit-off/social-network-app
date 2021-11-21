import React from "react";
import styles from './css/Pagination.module.css';
import * as axios from 'axios';

const Pagination = (props) => {
	const pages = [];

	for (let i = 1; i <= Math.ceil(props.pagesCount); i++) {
		pages.push(i);
	}

	return (
		<div className={styles.pagination}>
			<ul className={styles.list + ' list-reset'}>
				{
					pages.slice(0, 4).map(page => {
						return (
							<li className={styles.item} key={page}>
								<button
									onClick={() => {
										props.onPageChange(page)
									}}
									className={props.currentPage === page ? styles.btn + ' ' + styles.active + ' btn-reset' : styles.btn + ' btn-reset'} aria-label={"Перейти к странице " + page}>{page}</button>
							</li>
						)
					})
				}
				<li className={styles.item}>
					<span>...</span>
				</li>
				{
					pages.slice(pages.length - 3).map(page => {
						return (
							<li className={styles.item} key={page}>
								<button
									onClick={() => {
										props.onPageChange(page);
									}}
									className={props.currentPage === page ? styles.btn + ' ' + styles.active + ' btn-reset' : styles.btn + ' btn-reset'} aria-label={"Перейти к странице " + page}>{page}</button>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Pagination;