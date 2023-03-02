import React from "react";
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from "react-icons/fa";
import "./Tasks.css";

export default function Tasks({ tasks, handleDelete, handleEdit}) {
	return (
		<ul className="tasks">
			{tasks.map((task, index) => (
				<li key={task}>
					{task}
					<span>
						<FaEdit
							className="edit"
							onClick={(e) => handleEdit(e, index)}
						/>
						<FaWindowClose
							className="delete"
							onClick={(e) => handleDelete(e, index)}
						/>
					</span>
				</li>
			))}
		</ul>
	);
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}
