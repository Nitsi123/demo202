package com.spts.interfaces;

import com.spts.booking.Booking;

public interface IModifyReservation {
	public String deleteBooking(int id);
	public String changeBooking(int id, Booking newBooking);

}
